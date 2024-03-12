'use client';
import React from 'react';
import { usePathname } from 'next/navigation'

const ArticlesLayout = ({ children }: any) => {
    const pathname = usePathname();
    return (
        <div>
            {/* Додайте заголовок, навігаційне меню або інші елементи, що повторюються */}
            <nav className="navbar">
                <ul>
                    <li><a href="/articles/favorite" className={`link ${pathname === '/articles/favorite' ? 'active' : ''}`}>Articles favorite</a></li>
                    <li><a href="/articles/create" className={`link ${pathname === '/articles/create' ? 'active' : ''}`}>Articles create</a></li>
                </ul>
            </nav>

            {/* Вставте контент сторінки */}
            {children}
        </div>
    );
};

export default ArticlesLayout;