'use client';
import React from 'react';
import {usePathname} from "next/navigation";

const Layout = ({ children }: any) => {
    const pathname = usePathname();
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><a href="/articles" className={`link ${pathname === '/articles' ? 'active' : ''}`}>Articles</a></li>
                    <li><a href="/profile/settings" className={`link ${pathname === '/profile/settings' ? 'active' : ''}`}>Profile Settings</a></li>
                    <li><a href="/profile/security" className={`link ${pathname === '/profile/security' ? 'active' : ''}`}>Profile Security</a></li>
                </ul>
            </nav>
            <button className="btn" onClick={() => history.back()}>Назад</button>
            {children}
        </div>
    );
};

export default Layout;