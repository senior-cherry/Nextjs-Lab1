'use client';
import React from 'react';
import {usePathname} from "next/navigation";

const Layout = ({ children }) => {
    const pathname = usePathname();
    return (
        <div>
            {/* Додайте заголовок, навігаційне меню або інші елементи, що повторюються */}
            <nav className="navbar">
                <ul>
                    <li><a href="/articles" className={`link ${pathname === '/articles' ? 'active' : ''}`}>Articles</a></li>
                    <li><a href="/profile/settings" className={`link ${pathname === '/profile/settings' ? 'active' : ''}`}>Profile Settings</a></li>
                    <li><a href="/profile/security" className={`link ${pathname === '/profile/security' ? 'active' : ''}`}>Profile Security</a></li>
                </ul>
            </nav>
            {/* Вставте контент сторінки */}
            {children}
        </div>
    );
};

export default Layout;