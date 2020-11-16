import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Head from './head'
import Header from './common/header'
import Card from './common/card'

const Dummy = () => {
useEffect(() => {
  axios({
    method: 'post',
    url: '/api/v1/logs',
    data: {
      action: `navigate to ${window.location.pathname}`,
      time: +new Date()
    }
  })
  return () => {}
}, [])
  const goods = useSelector((s) => s.goods.goods)

  return (
    <div>
      <Head title="HomePage" />
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
