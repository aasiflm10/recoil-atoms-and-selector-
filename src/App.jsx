import { useState } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { counterAtom, evenSelector } from './store/atoms/counter'

function App() {

  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}

function Counter(){
    
  return <div>
    <DisplayCount/>
    <IsEven/>
    <IncreaseBy2/>
    <Decrease/>
    </div>
}

function DisplayCount(){
  const count = useRecoilValue(counterAtom)
  return <div>{count}</div>
}
function IncreaseBy2(){
  const setCount = useSetRecoilState(counterAtom)
  return <button onClick={()=>{setCount(c=>c+2)}}>
    Increase by 2
  </button>
}

function Decrease(){
  const setCount = useSetRecoilState(counterAtom)

  return <button onClick={()=>{setCount(c=>c-1)}}>
    Decrease
  </button>
}

function IsEven(){
  const val = useRecoilValue(evenSelector);

  return <div>
    {
      val ? "Even" :"Odd"
    }
  </div>
}

export default App
