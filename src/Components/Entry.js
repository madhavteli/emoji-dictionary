import React from 'react';

function Entry(props) {
	return(
		<div className="term">
			<dt>
		        <span className="emoji" role="img" aria-label="Tense Biceps">
		          {props.data.emoji}
		        </span>
				<span>{props.data.name}</span>
			</dt>
			<dd>{props.data.meaning}</dd>
		</div>
	)
}

export default Entry;