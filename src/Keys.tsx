import { IItem } from './index';
import { useState } from 'react';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    const [id, edit] = useState(-1);
    const [name, setName] = useState('');

    if (props.sorting === 'DESC') {
        props.initialData.sort((x, y) => y.id - x.id);
    } else {
        props.initialData.sort((x, y) => x.id - y.id);
    }

    return (
        <>
            {props.initialData.map((item) => {
                if (item.id != id) {
                    return (
                        <div onClick={() => edit(item.id)} key={item.id}>
                            {item.name}
                        </div>
                    );
                } else {
                    return (
                        <input
                            defaultValue={item.name}
                            key={item.id}
                            onChange={(e) => setName(e.currentTarget.value)}
                            onKeyDown={(e) => {
                                if (e.key == 'Enter') {
                                    item.name = name;
                                    edit(0);
                                }
                                if (e.key == 'Escape') {
                                    edit(0);
                                }
                            }}
                        ></input>
                    );
                }
            })}
        </>
    );
}
