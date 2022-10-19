import React, { useEffect, useState } from 'react'
import './pokemonpage.css'
import Back from '../../assets/back.svg'
import CircularProgress from '@mui/material/CircularProgress'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from '../../redux/slices/pokemon';
import { useParams, useNavigate } from 'react-router-dom'

const PokemonPage = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(true)


  const data = useSelector((state) => state.pokemon.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemon(id))
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='indPoke'>
        <div className='beginning'>
          <a onClick={() => navigate('/')}>
            <img src={Back} alt=''/>
          </a>
           <a onClick={() => navigate('/')} className='linkk' >Вернуться в Каталог </a>
        </div>
      {loading ?
      <div>
        <CircularProgress className='circles' size={200} color='inherit'/>
      </div>
      :
      <div className='pokemon-information'>
      <div className='text'>
        <div className='first'>
          <div>
              <p><h2 style={{color: 'black'}}>{data?.[1]?.name.toUpperCase()}</h2>  -  {data?.[1]?.flavor_text_entries?.[6]?.flavor_text}
              </p>
          </div>
          <div>
              <p>
                {data?.[1]?.flavor_text_entries?.[2]?.flavor_text}
              </p>
              <p>
              {data?.[1]?.flavor_text_entries?.[3]?.flavor_text}
              </p>
          </div>
          <div>
              <p>
              {data?.[1]?.flavor_text_entries?.[5]?.flavor_text}
              </p>
          </div>
        </div>



        <div className='containings'>
            <h2>Содержание</h2>
            <div className='inside-containings'>
                <p>1.Внешность</p>
                <p>2.Характер</p>
                <p>3.Характер</p>
                <p>4.Обитание</p>
                <p>5.В Аниме</p>
                <p>Эволюция</p>
            </div>
        </div>




        <div className='appearance'>
            <h1>Внешность</h1>
            <p>
             {data?.[1]?.flavor_text_entries?.[9]?.flavor_text}
             {data?.[1]?.flavor_text_entries?.[28]?.flavor_text}
             {data?.[1]?.flavor_text_entries?.[21]?.flavor_text}
             {data?.[1]?.flavor_text_entries?.[36]?.flavor_text}
             {data?.[1]?.flavor_text_entries?.[3]?.flavor_text}
             {data?.[1]?.flavor_text_entries?.[4]?.flavor_text}
            </p>
        </div>

        <div className='personality'>
            <h1>Характер</h1>
            <p> 
            {data?.[1]?.flavor_text_entries?.[5]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[12]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[36]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[4]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[40]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[43]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[4]?.flavor_text}
            </p>
            <div>
            {data?.[1]?.flavor_text_entries?.[49]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[32]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[24]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[37]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[22]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[23]?.flavor_text}
            </div>
        </div>


        <div className='abilities'>
            <h1>Способности</h1>
            <p>
            {data?.[1]?.flavor_text_entries?.[28]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[9]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[19]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[13]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[18]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[40]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[42]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[48]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[39]?.flavor_text}
            </p>

            <div>
            {data?.[1]?.flavor_text_entries?.[18]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[24]?.flavor_text}
            {data?.[1]?.flavor_text_entries?.[27]?.flavor_text}

            </div>
        </div>

      </div>
      <div className='single-pokemon'>
        <div className='rounded'>
          <img src={data?.[0]?.sprites.other.dream_world.front_default} alt=''/>
        </div>
        <h2>{data?.[1]?.name.toUpperCase()}</h2>
      </div>
     </div>
      }
    </div>

  )
}


export default PokemonPage