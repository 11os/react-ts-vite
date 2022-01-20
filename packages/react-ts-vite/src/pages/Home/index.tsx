import { NavBar, Tabs } from 'antd-mobile'
import Complicate from '../Complicate'

export default function Home() {
  return (
    <div>
      <NavBar>首页</NavBar>
      <Tabs>
        <Tabs.TabPane title="复杂组件" key="complicate">
          <Complicate />
        </Tabs.TabPane>
        <Tabs.TabPane title="蔬菜" key="vegatables">
          西红柿
        </Tabs.TabPane>
        <Tabs.TabPane title="动物" key="animals">
          蚂蚁
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}
