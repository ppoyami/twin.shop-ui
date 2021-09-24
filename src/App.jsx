import { Switch, Route } from 'react-router-dom';
import Home from '@/pages/Home';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
