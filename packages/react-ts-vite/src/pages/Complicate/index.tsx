import { PullToRefresh, List, InfiniteScroll, Swiper } from 'antd-mobile'
import { useState } from 'react'
import { sleep } from 'antd-mobile/es/utils/sleep'

let current = 1

function getNextData() {
  const ret: string[] = []
  for (let i = 0; i < 18; i++) {
    ret.unshift(current.toString())
    current++
  }
  return ret
}

export default function Complicate() {
  const [data, setData] = useState(() => getNextData())
  const [hasMore, setHasMore] = useState(true)
  async function loadMore() {
    await sleep(1000)
    setData([...data, ...getNextData()])
    setHasMore(true)
  }
  return (
    <PullToRefresh
      onRefresh={async () => {
        await sleep(1000)
        setData([...getNextData(), ...data])
      }}
    >
      <Swiper>
        {data.map((item) => (
          <Swiper.Item style={{ height: '100px', backgroundColor: 'lightBlue' }} key={item}>
            {item}
          </Swiper.Item>
        ))}
      </Swiper>
      <List style={{ minHeight: '100vh' }}>
        {data.map((item) => (
          <List.Item key={item}>{item}</List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </PullToRefresh>
  )
}
