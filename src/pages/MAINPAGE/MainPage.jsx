import React, { useEffect } from 'react'
import './mainpage.css'
import { useState } from 'react'
import Vector from '../../assets/vector.svg'
import { Checkbox, CircularProgress, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonSpecies } from '../../redux/slices/pokemonAdditionally';
import cloneDeep from 'lodash.clonedeep';


const MainPage = () => {


  ////////////DATA/////////////
  const { id } = useParams();
  const dispatch = useDispatch()
  const data = useSelector((state) => state.pokemonAdditionally.data)
  console.log("Stringi", data);
  const [poke, setPoke] = useState(data)

  useEffect(() => {
    dispatch(fetchPokemonSpecies(id))
  }, []);

  useEffect(() => {
    setPoke(data)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [data])


  ///////////// USETATES////////////////
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false)
  const [vectorState, setVectorState] = useState(false)
  const [vectorStates, setVectorStates] = useState(false)
  const [loading, setLoading] = useState(true)
  console.log('POKE', poke);

  

  ////////////////TOGGLE////////////////
  function handleClick() {
    setVectorState(vectorState => !vectorState)
  }
  let toggleClassCheck = vectorState ? 'active': null

  function handleClicks() {
    setVectorStates(vectorStates => !vectorStates)
  }
  let toggleClassChecks = vectorStates ? 'active': null



  //////////// A LOGIC OF SORTING THE DATA////////////
  const sortByPopular = (col) => {
    const sorted = [...poke].sort((a, b) =>
    a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
    );
    setPoke(sorted)
  }
  const sortByRatings = (col) => {
    const sorted = [...poke].sort((a, b) => a.order > b.order ? -1 : 1)
    setPoke(sorted)
  }
  const sortByPower = (col) => {
    const sorted = [...poke].sort((a, b) => a.base_experience > b.base_experience ? -1 : 1)
    setPoke(sorted)
  }


///////////// A LOGIC OF FILTERING THE DATA
  const filterPokemons = (gener) => {
    const pokes = cloneDeep(data)
    const updatedPokemons = pokes.filter((poke) => {
        return poke.height === gener;
    })
    setPoke(updatedPokemons)
  }




  

  /////////////DISPLAYING THE DATA////////////////
  return (
    <div className='wrapper-all'>

{/*******************SIDEBAR ******************/}
        <div className='sidebar'>
                    <div className='divider'></div>
                    <h3 onClick={(e) => setIsOpen(!isOpen)}>Поколение</h3>
                    <div onClick={(e) => setIsOpen(!isOpen)}>
                       <img 
                       onClick={handleClicks}
                       className={`vector ${toggleClassChecks}`} src={Vector} alt='vector'/>
                    </div>
                    {isOpen && (
                      <div className='label'>
                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                          >
                            <FormControlLabel onClick={() => filterPokemons(7)} value="1" control={<Radio sx={{'&.Mui-checked': { color: '#000000' },'& .MuiSvgIcon-root': { fontSize: 28 },}} />} label="1-ое" />
                            <FormControlLabel onClick={() => filterPokemons(10)} value="2" control={<Radio sx={{'&.Mui-checked': { color: '#000000' },'& .MuiSvgIcon-root': { fontSize: 28 },}}  />} label="2-ое" />
                            <FormControlLabel onClick={() => filterPokemons(5)} value="3" control={<Radio sx={{'&.Mui-checked': { color: '#000000' },'& .MuiSvgIcon-root': { fontSize: 28 },}}  />} label="3-ое" />
                            <FormControlLabel onClick={() => filterPokemons(20)} value="4" control={<Radio sx={{'&.Mui-checked': { color: '#000000' },'& .MuiSvgIcon-root': { fontSize: 28 },}}  />} label="4-ое" />
                            <FormControlLabel onClick={() => filterPokemons(17)} value="5" control={<Radio sx={{'&.Mui-checked': { color: '#000000' },'& .MuiSvgIcon-root': { fontSize: 28 },}}  />} label="5-ое" />
                            <FormControlLabel onClick={() => filterPokemons(6)} value="6" control={<Radio sx={{'&.Mui-checked': { color: '#000000' },'& .MuiSvgIcon-root': { fontSize: 28 },}}  />} label="6-ое" />
                            <FormControlLabel onClick={() => filterPokemons(8)} value="7" control={<Radio sx={{'&.Mui-checked': { color: '#000000' },'& .MuiSvgIcon-root': { fontSize: 28 },}}  />} label="7-ое" />
                            <FormControlLabel onClick={() => filterPokemons(12)} value="8" control={<Radio sx={{'&.Mui-checked': { color: '#000000' },'& .MuiSvgIcon-root': { fontSize: 28 },}}  />} label="8-ое" />
                            <FormControlLabel onClick={() => filterPokemons(4)} value="9" control={<Radio sx={{'&.Mui-checked': { color: '#000000' },'& .MuiSvgIcon-root': { fontSize: 28 },}}  />} label="9-ое и новее" />
                          </RadioGroup>
                       </FormControl>
                      </div>
                    )
                    }
                    <div className='tip' onClick={(e) => setIsActive(!isActive)}>
                      Тип
                    </div>
                    <div onClick={(e) => setIsActive(!isActive)}>
                       <img 
                       onClick={handleClick}
                       className={`vector ${toggleClassCheck}`} src={Vector} alt='vector'/>
                    </div>
                    {isActive && (
                      <div className='bottom'>
                          <FormControlLabel onClick={() => filterPokemons(10)}  value="1-e"control={<Checkbox sx={{'&.Mui-checked': { color: '#000000' },'& .MuiSvgIcon-root': { fontSize: 28 },}}/>}label="1-e"/>
                          <FormControlLabel onClick={() => filterPokemons(8)}  value="2-e"control={<Checkbox sx={{'&.Mui-checked': { color: '#000000' },'& .MuiSvgIcon-root': { fontSize: 28 },}}/>}label="2-e"/>                
                      </div>
                    )}
                    <h4>Физические</h4>
                    <img className='vector' src={Vector} alt='vector'/>
                    <h4 className='special'>Специальные</h4>
                    <img className='vector' src={Vector} alt='vector'/>
        </div>



{/* //////////////////ALL POKEMONS///////////// */}
        <div className='all-pokemons'>
           <div className='round'></div>
            <div className='sorting'>
              <h3>Сортировать по:</h3>
              <div className='three-sortings'>
                <a onClick={() => sortByPopular('name')}>Популярности</a>
                <a onClick={() => sortByRatings()}>Рейтингу</a>
                <a onClick={() => sortByPower()}>Уровню силы</a>
              </div>
            </div>
            {loading ?
            <div className='spinner'>
              <CircularProgress className='spin' size={180} color='inherit'/>
            </div>
            : 
            <div className='pokemons'>
            {poke.map(pok => {
              return (
                <div key={id}>
                <div className='roundd'>
                  <Link to={`${pok.id}`} ><p>{pok.name.toUpperCase()}</p></Link>
                  <Link to={`${pok.id}`} ><img src={pok.sprites.other.dream_world.front_default} alt=''/></Link>
                </div>
            </div>
              )
            })}
         </div>
            }
        </div>
    </div>
  )
}



export default MainPage