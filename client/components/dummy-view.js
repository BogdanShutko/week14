import React from 'react'
import { useSelector } from 'react-redux'
import Head from './head'
import Header from './common/header'
import Card from './common/card'

const Dummy = () => {

  const goods = useSelector((s) => s.goods.goods)

  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div className="flex flex-wrap flex justify-around">
        {goods.map((item) => {
          return (
            <div className=" h-auto m-3" key={item.id}>
              <Card data={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
