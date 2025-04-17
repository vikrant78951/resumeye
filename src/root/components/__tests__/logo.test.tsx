import {render , screen} from '@testing-library/react'
import {describe,it,expect} from 'vitest'
import Logo from '../logo'

describe('Testing Logo Component',()=>{

    it('Should render Logo with name',()=>{
        render(<Logo/>)
        const text = screen.getByText('ETIN')
        expect(text).toBeDefined()
    })
})