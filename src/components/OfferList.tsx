import { useContext } from 'react'
import { Offer } from './Offer'
import './OfferList.css'
import { OfferContext } from '../contexts/OfferContext'
import { Loader } from './ui/Loader'

export default function OfferList () {
  const { offers, loading } = useContext(OfferContext)
  
  return (
        <div className="list__container">
            {
              loading
                ? <Loader />
                : (
                    !offers ? <h3>Elija una categoria, la opcion de teletrabajo y una provincia para continuar</h3> : 
                    offers && offers.length > 0
                      ? (
                        <ul>
                            {
                            offers.map(offer => {
                              return (
                                <li key={offer.id}>
                                    <Offer
                                    offer={offer}
                                />
                                </li>
                              )
                            })
                            }
                        </ul>
                        )
                      : <h3>Lo sentimos, no se han encontado ofertas de trabajo con los criterios seleccionados</h3>)
            }

        </div>
  )
}
