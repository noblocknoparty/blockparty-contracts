import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class Instruction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount(){
    this.props.eventEmitter.on('instruction', obj => {
      this.handleOpen()
    });
  }

  handleOpen(){
    this.setState({open: true});
  };

  handleClose(a,b){
    this.setState({open: false});
  };

  render(){
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />
    ];

    return (
      <Dialog
        title="Welcome to BlockParty"
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose.bind(this)}
        autoScrollBodyContent={true}
        contentStyle={{width:'90%', maxWidth:'none'}}
      >
        <div>
          <h2>What is this?</h2>
          <p>
            Have you ever encountered free party or meetup and realised that half the people registered did not actually turn up?
            BlockParty solves this problem by providing a simple incentive for people to register only if they mean it.
            <br/>
            This is a PoC(Proof of concept) site on <em style={{fontWeight:'bold'}}>testnet</em> where you can simulate how it all works.
          </p>
          <h2>How does this work?</h2>
          <p>
            Simple. You pay small deposit when you register. You lose your deposit if you do not turn up. You will get your deposit back + we split the deposit of whom did not turn up.
            You go to party and may end up getting more money.
          </p>
          <div style={{textAlign:'center'}}>
            <img style={{width:'50%', margin:'25px'}} src="images/diagram.png"></img>
          </div>

          <h2>How to setup</h2>
          <ul>
            <li>Step 1: Install <a href='https://github.com/ethereum/mist/releases'>Ethereum Wallet</a>, and make sure you choose <em style={{fontWeight:'bold'}}>testnet</em>. Here is <a href='https://www.youtube.com/watch?v=Y3JfLgjqNU4'>a quick video tutorial</a> </li>
            <li>Step 2: Create at least 2 accounts on your wallet (so that you can simulate multiple users), and make sure you have some Ethers in both accounts. Here is the quick link on <a href='https://medium.com/@makoto_inoue/ether1-how-to-even-get-to-start-deploying-ethereum-d297cc68b5c7#.4no7evv94'> how to mine on testnet.</a> </li>
            <li>Step 3: Stop Ethereum Wallet</li>
            <li>Step 4: Start geth(Go Etheruem, command line tool) with the following options. (See the <a href='https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum'>installation instructions</a> for each platform)</li>
            <li>Step 5: Refresh this page </li>
          </ul>
          <blockquote style={{backgroundColor:'black', color:'white', padding:'1em'}}>
            geth --testnet --unlock 0,1 --rpc  --rpcapi "eth,net,web3" --rpccorsdomain http://blockparty.io.s3-website-eu-west-1.amazonaws.com
          </blockquote>
          <h2>How to play?</h2>
          <ul>
            <li>Step 1: Type your twitter account, pick one of your address, then press 'Register'. It will take 10 to 30 seconds to get verified and you will receive notification.</li>
            <li>Step 2: Try registering with another account. Each time you register, you deposit 1 ETHER to the contract</li>
            <li>Step 3: Select one of the registered account and then press 'Attend'. 'Payout' seciont tells you how much you may potentially get.</li>
            <li>Step 4: Press 'Payback' button and see one of your accounts get the payout ammount.</li>
            <li>If you want to play again, press 'Reset', which reset the meetup.</li>
          </ul>
        </div>
      </Dialog>
    );
  }
}