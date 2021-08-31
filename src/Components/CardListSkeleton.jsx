import React from 'react'
import CardSkeleton from './CardSkeleton';

const CardListSkeleton = ({list}) => {
    return (
        <ul className="list">
        {list.items.map((item, index) => {
          return <CardSkeleton key={index} item={item} channel={list.channel}/>
        })}
      </ul>
    )
}

export default CardListSkeleton
