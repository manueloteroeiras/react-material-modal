# React Modal Component

### Start: 
``` npm install react-material-modal --save ```

### How to use react Modal
```
 <Modal
    size="md"
    title="Modal Header"
    showing={ this.state.showing }
    close={ ()=> this.setState({ showing : false }) }
    headerStyle={{ color: '#fff', backgroundColor: '#00796b' }}
    bodyStyle={{ color: '#000', backgroundColor: '#26a69a' }}>
    
    <div style={{ textAlign: 'center' }}>
        <p>Modal Body</p>
    </div>
    
</Modal>
```
Enjoy it!
