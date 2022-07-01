import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../../src/components/CounterApp";

describe('Testing for CounterApp', () => {
  const initialValue = 10;

  // const value = 21;
  // test('should CounterApp match with snapshot', () => {
  //   render(<CounterApp value={value}/>)
  //   expect(screen).toMatchSnapshot();
  // })
  
  // test('should initial value of counter is 21', () => {
  //   render(<CounterApp value={value}/>)
  //   expect(screen.getByText(21)).toBeTruthy();
  //   expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('21')
  // });

  // test('should increment counter to 22', () => { 
  //   render(<CounterApp value="23"/>)
  //   fireEvent.click(screen.getByRole("button"), {name: '+1'});
  //   expect(screen.getByText("24")).toBeTruthy();
  // });
  // test('should first', () => { second })
  // test('should first', () => { second })

  test('debe de incrementar con el botón +1', () => {
        
    render( <CounterApp value={ initialValue } /> );
    fireEvent.click( screen.getByText('+1') )
    expect( screen.getByText('11') ).toBeTruthy();

  });

  test('debe de decrementar con el botón -1', () => {
      
      render( <CounterApp value={ initialValue } /> );
      fireEvent.click( screen.getByText('-1') );
      expect( screen.getByText('9') ).toBeTruthy();

  });

  test('debe de funcionar el botón de reset', () => {
      
      render( <CounterApp value={ 355 } /> );
      fireEvent.click( screen.getByText('+1') );
      fireEvent.click( screen.getByText('+1') );
      fireEvent.click( screen.getByText('+1') );
      // fireEvent.click( screen.getByText('Reset') );
      fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

      expect( screen.getByText( 355 ) ).toBeTruthy();

  });

})