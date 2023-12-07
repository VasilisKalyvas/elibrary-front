import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFilters from "../../../hooks/useFilter";
import { setRentsFilters } from "../../../store/auth/slice";
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { selectAdminRentsListFilters } from "../../../store/auth/selectors";

const FromUntilFilter = () => {
    const filters = useSelector(selectAdminRentsListFilters)
    const [from, setFrom] = useState('');
    const [until, setUntil] = useState('');
  
    const { handleMultipleFilters, resetFilters } = useFilters({
      setFiltersAction: setRentsFilters,
      filters: filters, 
    });
  
    const handleReset = () => {
      resetFilters();
      setFrom('')
      setUntil('')
    }
  
    const handleSearch = () => {
      if (from && until) {
        const dateFrom = dayjs(from).startOf('day');  
        const dateUntil = dayjs(until).endOf('day');
    
        if (dayjs(dateFrom).isBefore(dateUntil)) {
          const multipleFilters = [
            { type: 'from', value: dateFrom.toISOString() },
            { type: 'until', value: dateUntil.toISOString() }
          ];
    
          handleMultipleFilters({ multipleFilters });
        } else {
          return
          // Handle invalid date range, for example, show an error message
        }
      }
    };
  
    useEffect(() => {
      if(filters?.length){
        const initialFrom = filters.find(f => f.key === 'from')?.value || '';
        const initialUntil = filters.find(f => f.key === 'until')?.value || '';
  
        setFrom(dayjs(initialFrom))
        setUntil(dayjs(initialUntil))
      }
    }, [])
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='ml-auto flex align-items justify-end gap-4'>
            <DatePicker
              sx={{
                '.MuiInputLabel-root':{
                  color: 'white'
                },
                '.MuiInputLabel-root.Mui-error':{
                  color: 'white'
                },
                '.MuiInputBase-input': {
                  color: 'white'
                },
                '.MuiButtonBase-root': {
                  color: 'white'
                },
                '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white'
                },
                '.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white'
                }
              }}
              format='DD/MM/YYYY'
              label="From:"
              value={from}
              onChange={(value) => setFrom(value)}
            />
            <DatePicker
             sx={{
              '.MuiInputLabel-root':{
                color: 'white'
              },
              '.MuiInputLabel-root.Mui-error':{
                color: 'white'
              },
              '.MuiInputBase-input': {
                color: 'white'
              },
              '.MuiButtonBase-root': {
                color: 'white'
              },
              '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white'
              },
              '.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white'
              }
            }}
              format='DD/MM/YYYY'
              label="Until:"
              value={until}
              onChange={(value) => setUntil(value)}
            />
            <div className='p-2 bg-white rounded'>
              <FaSearch
                size={24}
                className='cursor-pointer text-[#37475a] hover:text-[#febd69]'
                onClick={handleSearch}
              />
            </div>
            <div className='p-2 bg-white rounded'>
              <FaArrowRotateRight
                size={24}
                className='cursor-pointer text-[#37475a] hover:text-[#febd69]'
                onClick={handleReset}
              />
            </div>
        </div>
      </LocalizationProvider>
    )
  }

  export default FromUntilFilter;
