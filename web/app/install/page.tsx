import React from 'react'
import classNames from 'classnames'
import Header from '../signin/_header'
import style from '../signin/page.module.css'
import InstallForm from './installForm'

const Install = () => {
  return (
    <div className={classNames(
      style.background,
      'flex w-full min-h-screen',
      'p-4 lg:p-8',
      'gap-x-20',
      'justify-center lg:justify-start',
    )}>
      <div className={
        classNames(
          'flex w-full flex-col bg-white shadow rounded-2xl shrink-0',
          'md:w-[608px] space-between',
        )
      }>
        <Header />
        <InstallForm />
        <div className='px-8 py-6 text-sm font-normal text-gray-500'>
            Copyright © 国投智能（厦门）信息股份有限公司 闽ICP备09012547号
        </div>
      </div>
    </div>
  )
}

export default Install
