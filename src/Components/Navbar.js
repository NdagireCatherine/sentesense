import React from 'react';

export default function Navbar() {
    return (
      <header>
        <div className='container'>
            <nav>
                <div className="logo">
                    <h2>SenteSense</h2>
                </div>
                <ul className='nav-link'>
                    <li>
                        <a href="/SignIn">Sign In</a>
                    </li>
                    <li>
                        <a href="/Dashboard">Home</a>
                    </li>
                    <li>
                        <a href="/Income">Income</a>
                    </li>
                    <li>
                        <a href="/Expenses">Expenses</a>
                    </li>
                    <li>
                        <a href="/Budgeting">Budgeting</a>
                    </li>
                </ul>
            </nav>       
        </div>
      </header>
    );
  }