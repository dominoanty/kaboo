import Card from '../card/Card';

function Hand({hand}) {

    return (
        <div className="hand">
            <table>
                <tr>
                    <td>
                        { '0,0' in hand ? <Card cardNum={hand['0,0']} /> : <div>empty</div> }
                    </td>
                    <td>
                        { '0,1' in hand ? <Card cardNum={hand['0,0']} /> : <div>empty</div> }
                    </td>
                </tr>
                <tr>
                    <td>
                        { '1,0' in hand ? <Card cardNum={hand['0,0']} /> : <div>empty</div> }
                    </td>
                    <td>
                        { '1,1' in hand ? <Card cardNum={hand['0,0']} /> : <div>empty</div> }
                    </td>
                </tr>
            </table>
        </div>
    )

}
export default Hand;