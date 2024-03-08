import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            {/* Додайте заголовок, навігаційне меню або інші елементи, що повторюються */}
            <nav>
                <ul>
                    <li><a href="/articles">Articles</a></li>
                    <li><a href="/profile/settings">Profile Settings</a></li>
                    <li><a href="/profile/security">Profile Security</a></li>
                </ul>
            </nav>

            {/* Вставте контент сторінки */}
            {children}
        </div>
    );
};

export default Layout;