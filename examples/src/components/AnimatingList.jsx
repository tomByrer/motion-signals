import { onMount } from "solid-js";
import { createAnimation } from 'motion-signals'
import { stagger } from 'motion';

import "./AnimatingList.css"

function AnimatingList() {
	const { getIsFinished, play, replay } = createAnimation(
		'.listItem',
		{ y: -20, opacity: 1 },
		{
			delay: stagger(0.3),
			duration: 0.5,
			easing: [0.22, 0.03, 0.26, 1],
		},
	);

	// Play the animation on mount of the component
	onMount(() => {
			play();
	});

	return (
	// Replay the animation anytime by calling a function, anywhere
		<div class="listContainer">
			<button disabled={!getIsFinished()} onClick={() => replay()}>
				Replay
			</button>

			<ul class="list">
				<li class="listItem">Item 1</li>
				<li class="listItem">Item 2</li>
				<li class="listItem">Item 3</li>
			</ul>
		</div>
	)
}

export default AnimatingList
