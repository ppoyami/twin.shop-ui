import { Switch, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={Detail} />
      </Switch>
    </div>
  );
}
