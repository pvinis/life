import { DateTime } from 'luxon'


type Entry = {
	date: DateTime
	text: string
}


export const Data: Entry[] = [{
	date: DateTime.local(1988, 2, 25).setZone('Europe/Athens', { keepLocalTime: true }),
	text: 'birth',
}]
