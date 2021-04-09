import React from 'react'
// @ts-expect-error This is a known issue on NextJs
// https://github.com/airbnb/babel-plugin-inline-react-svg/pull/17
import LogoSVG from './logo.svg'

export const Header = () => (
    <div className="relative flex justify-center" style={{ height: '50vh' }}>
        <div className=" absolute h-full w-full origin-top-left transform -skew-y-12 bg-gradient-to-r from-green-400 to-blue-700"></div>
        <div className="absolute mt-12">
            <LogoSVG
                style={{
                    width: '215px',
                    height: '200px',
                    fill: 'white',
                    margin: 'auto',
                }}
            />
            <span className="text-white font-mono">
                Say it with me one time Jerry!
            </span>
        </div>
    </div>
)
