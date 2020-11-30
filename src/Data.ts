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
		tags: ['general'],
	},
	...range(1, 33).map(year => ({
		date: DateTime.local(1988+year, 2, 25),
		text: `${year} birthday`,
		tags: ['general'],
	})),
	{
		date: now,
		text: 'now',
	},
	{
		interval: Interval.fromDateTimes(DateTime.local(2005, 9, 4), DateTime.local(2010, 7, 10)),
		text: 'di uoa',
		tags: ['studies'],
	},
	{
		interval: Interval.fromDateTimes(DateTime.local(2010, 9, 4), DateTime.local(2015, 7, 10)),
		text: 'di uoa master',
		tags: ['studies'],
	},
	{
		interval: Interval.fromDateTimes(DateTime.local(1988, 2, 25), DateTime.local(2014, 3, 3)),
		text: 'live in Athens',
		tags: ['living-place'],
	},
	{
		interval: Interval.fromDateTimes(DateTime.local(2014, 3, 3), DateTime.local(2016, 11, 3)),
		text: 'live in Vienna',
		tags: ['living-place'],
	},
	{
		interval: Interval.fromDateTimes(DateTime.local(2016, 11, 3), DateTime.local(2018, 11, 3)),
		text: 'live in Amsterdam',
		tags: ['living-place'],
	},
	{
		interval: Interval.fromDateTimes(DateTime.local(2018, 11, 3), DateTime.local(2020, 11, 3)),
		text: 'live in Rotterdam',
		tags: ['living-place'],
	},
	{
		interval: Interval.fromDateTimes(DateTime.local(2020, 11, 3), now),
		text: 'live in London',
		tags: ['living-place'],
	},
]


/// have tags as buttons that only show these events. like a filter. only "living-city" for example

///  nicer tooltip on hover

//// make mobile work with animation

/// make some private ones, that can be accessed with a password or something? also in a file thats encrypted on gh
