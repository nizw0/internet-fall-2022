import { faGithubSquare, faGitlabSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faEnvelope, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FadeIn } from 'react-slide-fade-in'
import Profile from '../../src/assets/profile.png'

function Alert({ content }) {
  return (
    <div className="absolute w-full shadow-xl alert h-14">
      <div>
        <svg className="w-6 h-6 stroke-info" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <span>{content}</span>
      </div>
    </div>
  )
}

function IconDescription({ icon, content }) {
  return (
    <div>
      <FontAwesomeIcon className="w-4 h-4" icon={icon} />
      <span className="text-lg before:content-['_']">{content}</span>
    </div>
  )
}

function IconLink({ href, icon }) {
  return (
    <div className="avatar">
      <a href={href} rel="noreferrer" target="_blank">
        <FontAwesomeIcon className="w-10 h-10" icon={icon} />
      </a>
    </div>
  )
}

function Link({ href, content }) {
  return (
    <a className="text-sky-400 before:content-['_'] after:content-['_↗']" href={href} rel="noreferrer" target="_blank">
      {content}
    </a>
  )
}

function Title({ content }) {
  return (
    <div>
      <h1 className="text-3xl font-bold">{content}</h1>
      <div className="mt-0 mb-2 divider" />
    </div>
  )
}

function Bold({ children }) {
  return <span className="font-bold before:content-['_'] after:content-['_']">{children}</span>
}

function Portfolio() {
  return (
    <div>
      <Alert content="This page is in development." />
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center h-screen md:h-fit">
          <div className="flex flex-col pt-4 mt-14 gap-y-10 md:flex-row md:gap-x-36">
            <FadeIn durationInMilliseconds={750} from="left" positionOffset={100} triggerOffset={50}>
              <div className="items-center justify-center avatar">
                <div className="w-64 h-64 mt-4 rounded-full">
                  <img src={Profile} />
                </div>
              </div>
            </FadeIn>
            <FadeIn
              delayInMilliseconds={250}
              durationInMilliseconds={750}
              from="right"
              positionOffset={100}
              triggerOffset={50}
            >
              <div className="flex flex-col justify-center text-left gap-y-3 md:pt-10">
                <p className="text-3xl font-semibold">吳丞恩 ChengEn Wu</p>
                <IconDescription content="07/14" icon={faSeedling} />
                <IconDescription content="ce.wu@outlook.com" icon={faEnvelope} />
                <div className="flex justify-center mt-4 gap-x-4 md:justify-start md:gap-x-2">
                  <IconLink href="https://github.com/nizw0" icon={faGithubSquare} />
                  <IconLink href="https://gitlab.com/nizw0" icon={faGitlabSquare} />
                  <IconLink href="https://www.linkedin.com/in/cewu" icon={faLinkedin} />
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="flex items-end justify-center visible h-full md:invisible">
            <FadeIn
              delayInMilliseconds={400}
              durationInMilliseconds={750}
              from="bottom"
              positionOffset={100}
              triggerOffset={50}
            >
              <button>
                <a href="#intro">
                  <FontAwesomeIcon className="w-8 h-8 motion-safe:animate-bounce" icon={faChevronDown} />
                </a>
              </button>
            </FadeIn>
          </div>
        </div>
        <FadeIn
          delayInMilliseconds={500}
          durationInMilliseconds={750}
          from="bottom"
          positionOffset={50}
          triggerOffset={50}
        >
          <div className="h-screen pt-4 space-y-16">
            <div className="flex flex-col mx-2 text-left" id="intro">
              <Title content="自介" />
              <p className="px-2 text-lg text-gray-300">
                就讀於國立臺東大學資訊工程學系，目前著重於學習
                <Bold>Web</Bold>
                相關技術，不過尚在入門階段😶‍🌫️。
              </p>
            </div>
            <div className="flex flex-col mx-2 text-left" id="experience">
              <Title content="經歷" />
              <div className="pl-6 pr-2">
                <ul className="text-lg tracking-wide text-gray-300 list-disc list-outside">
                  <li>
                    <Bold>5</Bold>次班級書卷獎
                  </li>
                  <li>
                    入選<Bold>2</Bold>次
                    <Link content="全國大專電腦軟體設計競賽" href="https://ncpc.nsysu.edu.tw" />
                    （NCPC）初賽
                  </li>
                  <li>
                    <Link content="大學程式能力檢定" href="https://cpe.cse.nsysu.edu.tw" />
                    （CPE） 達<Bold>5</Bold>題 最高排名︰ 21/2394 (top 0.9%)
                  </li>
                  <li>
                    <Link content="LeetCode" href="https://leetcode.com/Nizw0" />
                    競賽排名 top<Bold>21%</Bold>、累積題數
                    <Bold>408</Bold>題
                  </li>
                  <li>
                    在學校宿舍負責開發及維護
                    <Link content="國立臺東大學學生宿舍系統" href="https://dorm.nttu.club" />
                  </li>
                  <li>
                    在學校宿舍擔任<Bold>獎懲資訊組組長</Bold>
                  </li>
                  <li>
                    在
                    <Link content="AWS Educate" href="https://aws.amazon.com/tw/education/awseducate/" />
                    擔任
                    <Bold>AWS Educate cloud ambassador</Bold>
                    負責南區技術支援
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

export default Portfolio
