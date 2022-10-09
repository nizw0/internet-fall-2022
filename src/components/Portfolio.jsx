import { faGithubSquare, faGitlabSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import Profile from '../../src/assets/profile.png'

function Alert({ context }) {
  return (
    <div className="alert mb-5 shadow-lg">
      <div>
        <svg
          className="h-6 w-6 flex-shrink-0 stroke-info"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <span>{context}</span>
      </div>
    </div>
  )
}

Alert.propTypes = {
  context: PropTypes.string.isRequired
}

function Portfolio() {
  return (
    <div>
      <Alert context="This page is in development." />
      <div className="grid justify-center gap-y-20">
        <div className="mr-10 flex flex-none flex-row justify-center space-x-40">
          <div className="avatar">
            <div className="h-56 w-56 rounded-full">
              <img src={Profile} />
            </div>
          </div>
          <div className="grid shrink-0 gap-y-3 self-center text-left">
            <p className="text-2xl font-semibold">吳丞恩 ChengEn Wu</p>
            <div>
              <FontAwesomeIcon className="h-4 w-4" icon={faSeedling} />
              <span className="before:content-['_']">2001/07/14</span>
            </div>
            <div>
              <FontAwesomeIcon className="h-4 w-4" icon={faEnvelope} />
              <span className="before:content-['_']">ce.wu@outlook.com</span>
            </div>
            <div className="flex gap-2">
              <div className="avatar">
                <a href="https://github.com/nizw0" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon className="h-10 w-10" icon={faGithubSquare} />
                </a>
              </div>
              <div className="avatar">
                <a href="https://gitlab.com/nizw0" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon className="h-10 w-10" icon={faGitlabSquare} />
                </a>
              </div>
              <div className="avatar">
                <a href="https://www.linkedin.com/in/cewu" rel="noreferrer" target="_blank">
                  <FontAwesomeIcon className="h-10 w-10" icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid text-left">
          <h1 className="text-3xl font-bold">簡歷</h1>
          <div className="divider mt-0 mb-2" />
          <p className="text-gray-300">
            就讀於國立臺東大學資訊工程學系，目前著重於學習後端和相關技術，偶爾玩玩前端設計。
          </p>
        </div>
        <div className="grid text-left">
          <h1 className="text-3xl font-bold">經歷</h1>
          <div className="divider mt-0 mb-2" />
          <ul className="list-inside list-disc text-gray-300">
            <li>
              至大三下共 <b>4</b> 次班級書卷獎
            </li>
            <li>入選兩次 全國大專電腦軟體設計競賽（NCPC）初賽</li>
            <li>
              大學程式能力檢定 達 <b>5</b> 題 最高排名︰ 21/2394 (0.9%)
            </li>
            <li>
              <a
                className="text-sky-400 after:content-['_↗']"
                href="https://leetcode.com/Nizw0"
                rel="noreferrer"
                target="_blank"
              >
                LeetCode
              </a>
              競賽排名 top <b>21%</b> 及累積題數 <b>408</b> 題
            </li>
            <li>
              目前負責開發及維護
              <a
                className="text-sky-400 before:content-['_'] after:content-['_↗']"
                href="https://dorm.nttu.club"
                rel="noreferrer"
                target="_blank"
              >
                國立臺東大學學生宿舍系統
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
