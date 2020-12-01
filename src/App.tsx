import { DateTime, Duration } from 'luxon'
import randomColor from 'randomcolor'
import { range } from 'ramda'

import { Data, Entry } from './Data'
import { useState } from 'react'


type TimeUnit = {
	index: number
	date: string
	text: string[]
}

const colors : {[key:string]: string} = {}

const TimeBox = ({ unit }: {unit: TimeUnit}) => {
	let color = '#cccccc'
	if (unit.text.length > 0) {
		if (colors[unit.text[0]] === undefined) {
			colors[unit.text[0]] = randomColor({ luminosity: 'bright' })
		}
		color = colors[unit.text[0]]
	}

	return (
		<div
			style={{ width: 10, height: 10, margin: 2, backgroundColor: color }}
			title={[unit.date, ...unit.text].join('\n')}
		/>
	)
}

const findDob = (data: Entry[], duration: Duration) => {
	const dobEntry = Data.find(x => x.text === 'birth')
	if (dobEntry !== undefined && 'date' in dobEntry) {
		return dobEntry.date
	}

	return DateTime.local().minus(duration)
}

export const App = () => {
	const duration = Duration.fromObject({ years: 100 })
	const dob = findDob(Data, duration)

	const weeks: TimeUnit[] = range(0, duration.as('weeks')).map(index => ({
		index,
		date: dob.plus({ weeks: index }).toFormat('dd-MM-yyyy'),
		text: [],
	}))


	Data.forEach(entry => {
		if ('date' in entry) {
			const weekToBeAddedTo = Math.floor(entry.date.diff(dob, 'weeks').weeks)
			weeks[weekToBeAddedTo].text.push(entry.text)
		}
		if ('interval' in entry){
			const startWeekToBeAddedTo = Math.floor(entry.interval.start.diff(dob, 'weeks').weeks)
			const endWeekToBeAddedTo = Math.floor(entry.interval.end.diff(dob, 'weeks').weeks)
			range(startWeekToBeAddedTo, endWeekToBeAddedTo + 1).forEach(weekIndex => {
				weeks[weekIndex].text.push(entry.text)
			})
		}
	})

	const [showDebug, setShowDebug] = useState(false)

	return (
		<div>
			<div style={{ display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap'  }}>
				{[weeks.map((week) => {
					return <TimeBox key={week.index} unit={week} />
				})]}
			</div>
			<a href='https://github.com/pvinis/life'>See source code</a>
			<div>
				<button type='button' onClick={() => setShowDebug(!showDebug)}>
					{showDebug ? 'Hide' : 'Show'} debug data
				</button>
				{showDebug ?  (
					<li>
						{Data.map((entry) => {
							let str = ''
							if ('date' in entry) {
								str = entry.date.toString()
							}
							if ('interval' in entry){
								str = entry.interval.toString()
							}
							return (
								<ul key={entry.text}>
							- {entry.text}: {str}
								</ul>
							)
						})}
					</li>
				) : null}
			</div>
		</div>
	)
}
