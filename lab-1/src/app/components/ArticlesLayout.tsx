import React from 'react';

const ArticlesLayout = ({ children }) => {
    return (
        <div>
            {/* Додайте заголовок, навігаційне меню або інші елементи, що повторюються */}
            <nav>
                <ul>
                    <li><a href="/articles/favorite">Articles favorite</a></li>
                    <li><a href="/articles/create">Articles create</a></li>
                </ul>
            </nav>

            {/* Вставте контент сторінки */}
            {children}
        </div>
    );
};

export default ArticlesLayout;