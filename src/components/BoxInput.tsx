import {useState} from 'react'

import '../../scss/_boxInput.scss'
import { IconOption, IconSend } from './Icon.tsx';

const BoxInput = () => {

    const [value, setValue] = useState<string>('');

    return (
        <div className="box-input">
            <button className="option-button">
                <IconOption />
            </button>
            <input  type="text" className="input"  value={value} onChange={ e => setValue(e.target.value) } placeholder='Write something ..'/>
            <button className="send-button">
                <IconSend />
            </button>
        </div>
    )
}

export default BoxInput;