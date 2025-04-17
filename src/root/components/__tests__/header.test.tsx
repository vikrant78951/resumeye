

import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Header from '../header'


describe('Testing Header Component',()=>{

  beforeEach(()=>{
    render(<Header/>)
  })

  it('Should have logo ',()=>{
    const logo = screen.getByRole("link", { name: /etin/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("href", "/");
  });

  it('Should have SignIn button ',()=>{
    const signInButton = screen.getByRole("link", { name: /Sign In/i });
    expect(signInButton).toBeInTheDocument();
  });

});