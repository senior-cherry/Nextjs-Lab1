'use client';
import React from 'react';
import { usePathname } from 'next/navigation'

const ArticlesLayout = ({ children }: any) => {
    const pathname = usePathname();
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><a href="/articles/favorite" className={`link ${pathname === '/articles/favorite' ? 'active' : ''}`}>Articles favorite</a></li>
                    <li><a href="/articles/create" className={`link ${pathname === '/articles/create' ? 'active' : ''}`}>Articles create</a></li>
                </ul>
            </nav>

            <button className="btn" onClick={() => history.back()}>Назад</button>
            {children}
        </div>
    );
};

export default ArticlesLayout;