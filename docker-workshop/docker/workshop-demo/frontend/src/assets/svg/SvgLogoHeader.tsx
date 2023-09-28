import { SvgProps } from '@interface'
import { colors } from '@variables'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: block;
`

export const SvgLogoHeader: FunctionComponent<SvgProps> = ({ fill }) => {
  const pathFill = fill || colors.primary.x400

  return (
    <Svg width="141" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#a)" fill={pathFill}>
        <path d="M47.026 18.288c-.535-.239-1.184-.36-1.93-.36h-3.46v8.67h1.84v-2.413h1.62c.746 0 1.398-.122 1.934-.367a2.92 2.92 0 0 0 1.288-1.087c.3-.47.454-1.031.454-1.677 0-.645-.154-1.206-.454-1.68-.301-.472-.737-.839-1.292-1.086Zm-.53 3.82c-.31.256-.792.385-1.431.385h-1.586v-2.877h1.586c.642 0 1.125.132 1.435.386.294.244.436.589.436 1.052 0 .464-.145.809-.44 1.053ZM59.157 22.73c.301-.47.455-1.03.455-1.676 0-.645-.154-1.206-.455-1.68-.3-.472-.736-.839-1.29-1.086-.537-.239-1.185-.36-1.931-.36h-3.46v8.67h1.84v-2.426h1.62c.113 0 .226 0 .332-.01l1.686 2.404.022.032h2.1l-2.034-2.87c.47-.245.846-.58 1.115-.997Zm-1.823-.617c-.31.26-.79.392-1.433.392h-1.585V19.62h1.585c.643 0 1.125.132 1.436.386.294.244.435.586.435 1.053 0 .466-.144.811-.438 1.059v-.004ZM70.702 19.09a4.417 4.417 0 0 0-1.457-.928 4.932 4.932 0 0 0-1.808-.326c-.649 0-1.27.113-1.827.332a4.385 4.385 0 0 0-1.457.934 4.3 4.3 0 0 0-.965 1.407 4.386 4.386 0 0 0-.348 1.755c0 .63.116 1.222.348 1.755.228.532.554 1.006.965 1.407.41.398.905.714 1.463.934a4.96 4.96 0 0 0 1.82.332 4.93 4.93 0 0 0 1.809-.326 4.415 4.415 0 0 0 1.457-.928 4.2 4.2 0 0 0 .968-1.407 4.518 4.518 0 0 0 .342-1.764c0-.636-.116-1.231-.342-1.764a4.213 4.213 0 0 0-.968-1.41v-.003Zm-.736 4.258c-.138.33-.33.617-.574.862a2.611 2.611 0 0 1-.862.567 2.89 2.89 0 0 1-1.093.204c-.395 0-.774-.07-1.103-.204a2.59 2.59 0 0 1-1.448-1.426 2.774 2.774 0 0 1-.207-1.084c0-.392.07-.755.207-1.084.138-.326.332-.617.577-.859a2.65 2.65 0 0 1 .87-.567 2.927 2.927 0 0 1 1.104-.204c.398 0 .761.07 1.093.204.33.135.62.326.862.567.245.245.436.533.574.862.137.329.206.692.206 1.084 0 .392-.069.755-.206 1.084v-.006ZM80.768 22.104a4.653 4.653 0 0 0-1.021-.417c-.351-.1-.702-.19-1.047-.272a9.685 9.685 0 0 1-.906-.257 1.576 1.576 0 0 1-.57-.323c-.106-.097-.157-.235-.157-.417 0-.163.044-.307.135-.438.091-.132.25-.245.473-.333.245-.097.574-.147.975-.147.326 0 .664.047 1.012.141.342.091.67.245.978.448l.354.238.645-1.566-.235-.16a4.267 4.267 0 0 0-1.29-.574 5.724 5.724 0 0 0-1.47-.194c-.746 0-1.376.116-1.871.345-.51.238-.9.56-1.153.962-.25.4-.38.843-.38 1.319s.107.906.317 1.232c.207.316.48.57.812.758.307.172.648.313 1.015.423.354.106.708.197 1.053.272.326.073.627.157.896.254.238.085.43.198.573.33.11.1.157.225.157.403 0 .16-.044.301-.138.427-.094.128-.254.235-.476.316-.248.091-.586.138-1.006.138-.464 0-.918-.081-1.347-.241-.43-.16-.784-.36-1.053-.596l-.348-.304-.73 1.539.188.175c.354.33.837.599 1.435.8.59.197 1.213.297 1.855.297.746 0 1.379-.116 1.88-.345.52-.235.912-.56 1.169-.962.254-.4.385-.84.385-1.31 0-.47-.106-.892-.32-1.218a2.366 2.366 0 0 0-.81-.752l.021.01ZM90.984 18.288c-.536-.239-1.185-.36-1.93-.36h-3.46v8.67h1.84v-2.413h1.62c.745 0 1.397-.122 1.933-.367.554-.25.987-.617 1.288-1.087.3-.47.454-1.031.454-1.677 0-.645-.154-1.206-.454-1.68-.301-.472-.737-.839-1.291-1.086Zm-.53 3.82c-.31.256-.793.385-1.432.385h-1.586v-2.877h1.586c.642 0 1.125.132 1.435.386.295.244.436.589.436 1.052 0 .464-.145.809-.44 1.053ZM98.274 23.035h3.998v-1.67h-3.998v-1.749h4.487v-1.689h-6.323v8.67h6.483V24.91h-4.647v-1.874ZM113.482 22.73c.3-.47.454-1.033.454-1.676 0-.642-.154-1.206-.454-1.68a2.889 2.889 0 0 0-1.292-1.086c-.535-.239-1.184-.36-1.93-.36h-3.459v8.67h1.839v-2.426h1.62c.113 0 .226 0 .332-.01l1.686 2.404.022.032h2.1l-2.034-2.87c.47-.245.846-.58 1.116-.997Zm-1.824-.617c-.31.26-.79.392-1.432.392h-1.586V19.62h1.586c.642 0 1.125.132 1.435.386.294.244.435.589.435 1.053 0 .463-.144.811-.438 1.059v-.004ZM119.648 17.927h-1.839v8.67h1.839v-8.67ZM122.926 19.616h2.732v6.982h1.827v-6.982h2.733v-1.689h-7.292v1.69ZM138.646 17.927l-2.366 3.883-2.335-3.848-.018-.035h-2.04l3.44 5.644v3.023h1.827v-3.008l3.438-5.659h-1.946ZM67.469 31.75a2.54 2.54 0 0 0-1.178-.264h-1.783v4.205h1.783c.442 0 .84-.088 1.178-.263.342-.175.611-.426.8-.74.19-.316.284-.686.284-1.1 0-.413-.097-.783-.285-1.1a1.96 1.96 0 0 0-.799-.739Zm.172 2.6c-.128.216-.31.389-.542.51a1.805 1.805 0 0 1-.84.186h-1.027v-2.914h1.028c.322 0 .607.062.84.184.231.123.416.292.544.508.129.216.195.473.195.765 0 .291-.066.545-.195.761h-.003ZM75.018 31.486h-.721v4.205h.72v-4.205ZM81.91 32.517c.138-.132.304-.235.492-.31a1.77 1.77 0 0 1 1.232 0c.184.072.36.188.52.341l.05.047.454-.454-.044-.05a1.799 1.799 0 0 0-.705-.49 2.507 2.507 0 0 0-.908-.162c-.33 0-.627.053-.897.16a2.15 2.15 0 0 0-.71.451c-.201.194-.361.423-.47.683-.114.26-.17.549-.17.859 0 .31.056.598.17.858.112.26.269.49.47.68.2.195.438.345.707.451.27.107.57.16.89.16.292 0 .58-.044.856-.134.266-.088.501-.213.705-.38l.05.007v-.047l.025-.022-.025-.035v-1.632h-.699v1.353c-.09.057-.185.1-.282.135a1.845 1.845 0 0 1-1.219-.012 1.417 1.417 0 0 1-.812-.79 1.545 1.545 0 0 1-.112-.592c0-.21.037-.417.113-.599.075-.181.181-.341.32-.473v-.003ZM91.283 31.486h-.72v4.205h.72v-4.205ZM96.77 32.128h1.39v3.56h.715v-3.56h1.395v-.642h-3.5v.642ZM106.804 31.486l-1.906 4.202h.752l1.483-3.369 1.482 3.37h.761l-1.908-4.203h-.664ZM115.518 35.042v-3.556h-.721v4.202h2.923v-.646h-2.202ZM33.147 23.806c0-8.502-6.455-15.408-14.722-16.295V0h-3.688v11.099h1.89c7.075 0 12.835 5.628 12.835 12.707 0 6.467-4.807 12.076-11.037 12.998v-3.632c4.227-.871 7.399-4.697 7.399-9.175 0-5.105-4.152-9.257-9.257-9.257H7.37v22.11H3.685V11.053h7.376V0H7.373v7.37H0v33.166l3.685.003 3.688-.003v7.382h3.688V18.425h5.51a5.58 5.58 0 0 1 5.57 5.572 5.58 5.58 0 0 1-4.512 5.48H14.74v18.438h3.688V40.52c8.267-.934 14.722-8.213 14.722-16.714h-.003Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill={pathFill} d="M0 0h140.59v47.915H0z" />
        </clipPath>
      </defs>
    </Svg>
  )
}
