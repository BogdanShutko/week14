/* eslint-disable */

import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLogs } from '../redux/reducers/logs'
import Head from './head'

const Logs = () => {
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLogs())
    axios({
      method: 'post',
      url: '/api/v1/logs',
      data: {
        time: +new Date(),
        action: `navigate to ${window.location.pathname} page`
      }
    })
    return () => {}
  }, [])

  return (
    <div>
Ololo
    </div>
  )
}

Logs.propTypes = {}

export default React.memo(Logs)

