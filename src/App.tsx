import {range}  from "ramda"

import { Data } from "./Data"


export const App = () => {
  return (
    <div>
	{[range(20, 40).map(index => {
		<p key={`${index}`}>wow{index}</p>
	})]}
	<li>
	{Data.map(entry=>{
			return (
			<ul key={entry.text}>- {entry.text}: {entry.date.toString()}</ul>
			)
		})}
	</li>
    </div>
  );
}
