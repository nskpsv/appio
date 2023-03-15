import React, { 
  ChangeEvent, 
  ClipboardEvent, 
  FocusEvent, 
  KeyboardEvent, 
} from 'react'; 
import { Input, InputProps } from '../input/input'; 
 
export type PhoneProps = InputProps; 
 
export const Phone: React.FC<PhoneProps> = ({ 
  onChange = () => {}, 
  ...otherProps 
}) => { 
  const defaultValue = '+7 ('; 
  const getNums = (value: string) => value.replace(/\D/g, '').split(''); 
 
  const formatValue = (value: string) => { 
    let nums = getNums(value); 
    const length = nums.length; 
 
    if (length === 0) { 
      return defaultValue; 
    } 
 
    if (nums[0] === '8') { 
      nums.splice(0, 1, '7'); 
    } 
 
    if (nums[0] !== '7') { 
      nums.unshift('7'); 
    } 
 
    const result = ['+'].concat(nums); 
 
    if (length > 0) { 
      result.splice(2, 0, ' ('); 
    } 
    if (length > 4) { 
      result.splice(6, 0, ') '); 
    } 
    if (length > 7) { 
      result.splice(10, 0, '-'); 
    } 
    if (length > 9) { 
      result.splice(13, 0, '-'); 
    } 
 
    return result.join(''); 
  }; 
 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { 
    const input = e.target; 
    const oldInputValue = input.value; 
 
    const positionValue = formatValue( 
      oldInputValue.slice(0, input.selectionStart || 0), 
    ).length; 
 
    input.value = formatValue(input.value); 
 
    input.setSelectionRange(positionValue, positionValue); 
 
    onChange(e); 
  }; 
 
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => { 
    const input = e.currentTarget as HTMLInputElement; 
 
    if (getNums(input.value).length <= 1) { 
      input.value = defaultValue; 
    } 
  }; 
 
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => { 
    const input = e.currentTarget as HTMLInputElement; 
 
    if (getNums(input.value).length < 2) { 
      input.value = ''; 
    } 
  }; 
 
  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => { 
    e.preventDefault(); 
    const value = e.clipboardData.getData('text/plain'); 
    e.currentTarget.value = formatValue(value); 
  }; 
 
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => { 
    const input = e.currentTarget; 
    const defaultPostion = defaultValue.length; 
 
    if ( 
      input.selectionStart === input.selectionEnd &&  
      (input.selectionStart || 0) < defaultPostion 
    ) { 
      input.setSelectionRange(defaultPostion, defaultPostion); 
    } 
  } 
 
  return ( 
    <Input 
      onChange={handleChange} 
      onFocus={handleFocus} 
      onBlur={handleBlur} 
      onPaste={handlePaste} 
      onKeyDown={handleKeyDown} 
      maxLength={18} 
      placeholder="+7 (___) ___-__-__" 
      {...otherProps} 
    /> 
  ); 
};