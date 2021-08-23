import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import logo from '../Logo.png'; // with import
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';



function NavbarTop({currentPageURL,setCurrentPageURL,inputText,setInputText,filter, setFilter, handleFilter}){


    function inputTextHandler(e){
        setInputText(e.target.value);
        
    };


    function handleSubmit(e){
        e.preventDefault()
        let news = currentPageURL.concat('/',inputText)
        setCurrentPageURL(news);
        setInputText('')
    };

    function handleFilter(e){
        setFilter(e.target.value);
        let news = 'https://pokeapi.co/api/v2/type'.concat('/', e.target.value)
        setCurrentPageURL(news);
    };



    return (
        <Navbar bg="danger" expand="lg" id="NavbarId">
            <img id="Logo"src={logo}/>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0 mt-4" 
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                    <Form.Select onChange={handleFilter} value={filter}>
                        <option value="All">All</option>
                         <option value="fire">Fire</option>
                         <option value="water">Water</option>
                         <option value="electric">Electric</option>
                         <option value="steel">Steel</option>
                         <option value="fairy">Fairy</option>
                         <option value="ghost">Ghost</option>
                         <option value="dark">Dark</option>
                         <option value="normal">Normal</option>
                         <option value="fighting">Fighting</option>
                         <option value="flying">Flying</option>
                         <option value="rock">Rock</option>
                         <option value="ground">Ground</option>
                         <option value="dragon">Dragon</option>
                         <option value="ice">Ice</option>
                         <option value="psychic">Psychic</option>
                         <option value="grass">Grass</option>
                         <option value="poison">Poison</option>
                         <option value="bug">Bug</option>
                         <option value="unknown">Unknown</option>
                    </Form.Select>

                </Nav>
                <Form className="d-flex"  >
                    <FormControl
                        type="search"
                        placeholder="Enter Pokemon Name"
                        className="mr-2 rounded-0"
                        aria-label="Search"
                        value={inputText}
                        onChange={inputTextHandler}

                    />
                    <Button className="rounded-0" variant="warning" onClick={handleSubmit}>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}




export default NavbarTop;