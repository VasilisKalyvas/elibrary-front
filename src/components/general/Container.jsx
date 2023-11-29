import React from 'react'

const Container = ({
    children,
    width = '',
    height = '',
    className = '',
    backgroundColor = '',
    textColor = '',
    titleText = '',
    titleClassName = '',
    roundedClassName = 'rounded-xl'
}) => {
  return (
    <div className={`p-8 mb-4 mt-4
        ${className ? className: 'w-full flex flex-col items-center justify-center'}
        ${roundedClassName}
        ${height ? `h-[${height}]`: 'h-full'}
        ${width ? `max-w-[${width}]`: 'w-full'}
        ${backgroundColor ? `bg-[${backgroundColor}]`: 'bg-white'}
        ${textColor ? `text-[${textColor}]`: 'text-black'}
    `}>
        {
            titleText
            ?
                <div className={`${titleClassName ? titleClassName : 'mb-4 font-bold text-lg'}`}>
                    {titleText}
                </div>
            : null
        }
        {children}
    </div>
  )
}

export default Container