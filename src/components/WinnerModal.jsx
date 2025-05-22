import React from 'react'
import { useGameStore } from '../zustand/gameStore'

function WinnerModal() {
	const isGameOver = useGameStore(state => state.isGameOver())

	if(!isGameOver) return null;
	return (
		<div>WinnerModal</div>
	)
}

export default WinnerModal