import React from 'react'
import Header from './Header'
import QuestionGrid from './QuestionGrid'
import QuestionModal from './QuestionModal'
import WinnerModal from './WinnerModal'

function Game() {

	return (
		<div>
			<Header />
			<QuestionGrid />
			<QuestionModal />
			<WinnerModal />
		</div>
	)
}

export default Game