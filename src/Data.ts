import { DateTime, Interval } from 'luxon'
import { range } from 'ramda'


export type Entry = (
	| {text: 'birth', date: DateTime}
	| {text: 'now', date: DateTime}
	| (
		{text: string}
		&
		({ date: DateTime} | {interval: Interval})
		)
) & {
	tags? : string[]
	color?: string
}


const now = DateTime.local()

export const Data: Entry[] = [
	{
		date: DateTime.local(1988, 2, 25).setZone('Europe/Athens', { keepLocalTime: true }),
		text: 'birth',
	},
	...range(1, 33).map(year => ({
		date: DateTime.local(1988+year, 2, 25),
		text: `${year} birthday`,
	})),
	{
		date: now,
		text: 'now',
	},
	{
		interval: Interval.fromDateTimes(DateTime.local(2005, 9, 4), DateTime.local(2010, 7, 10)),
		text: 'di uoa',
	},
	{
		interval: Interval.fromDateTimes(DateTime.local(2010, 9, 4), DateTime.local(2015, 7, 10)),
		text: 'di uoa master',
	},
	{
		interval: Interval.fromDateTimes(DateTime.local(1988, 2, 25), DateTime.local(2014, 3, 3)),
		text: 'live in Athens',
	},
	{
		interval: Interval.fromDateTimes(DateTime.local(2014, 3, 3), DateTime.local(2016, 11, 3)),
		text: 'live in Vienna',
	},
	{
		interval: Interval.fromDateTimes(DateTime.local(2016, 11, 3), DateTime.local(2018, 11, 3)),
		text: 'live in Amsterdam',
	},
	{
		interval: Interval.fromDateTimes(DateTime.local(2018, 11, 3), DateTime.local(2020, 11, 3)),
		text: 'live in Rotterdam',
	},
	{
		date: DateTime.local(1988, 2, 25).plus({ years: 18 }),
		text: 'turned 18',
	},
	{
		interval: Interval.fromDateTimes(DateTime.local(2020, 11, 3), now),
		text: 'live in London',
	},
]


/// have tags as buttons that only show these events. like a filter. only "living-city" for example
