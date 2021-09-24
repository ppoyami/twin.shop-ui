import { Switch, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';
import Register from '@/pages/Register';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}
