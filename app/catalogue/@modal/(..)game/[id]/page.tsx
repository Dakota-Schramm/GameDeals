import React from 'react'

import Modal from './modal';
import Game from 'components/game';
import getPrices from 'services/getPrices'; 

const GameModal = ({ params }) => {
  const gamePrices = getPrices(params.id)

  return (
    // <Modal>
    //   <Game />
    // </Modal>
    <section className='text-red-300 bg-white'>
      Test modal
    </section>
  )

}

export default GameModal;
