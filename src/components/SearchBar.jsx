import styled from "styled-components";

const DivSearchBar = styled.div`
   padding: 5px;
   display: flex;
   margin: 10px auto;
   justify-content: center;
   width: 50%;
   height: 30px;
   vertical-align: middle;
`
const InpSearch = styled.input`
   padding: 5px;
`
const BtnSearch = styled.button`
   padding: 5px;
   margin-left: 10px;
   
`
export default function SearchBar(props) {
   return (
      <DivSearchBar className = 'search-box'>
         <InpSearch type='search' />
         <BtnSearch onClick={props.onSearch}>Agregar</BtnSearch>
      </DivSearchBar>
   );
}
