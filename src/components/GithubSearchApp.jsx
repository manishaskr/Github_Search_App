import React, {useState} from 'react'
import { CLIENT_ID, CLIENT_SECRET } from "./GithubCredentials";
import axios from "axios"
import GithubProfile from './GithubProfile';
import GithubRepos from './GithubRepos';

const GithubSearchApp = () => {
  
  const [githubUser,setGithubUser] = useState("");
  const [githubProfile,setGithubProfile] = useState({});
  const [githubRepos,setGithubRepos]=useState([]);

  const submitSearch = async(e) =>{
    e.preventDefault();
    let dataURL = `https://api.github.com/users/${githubUser}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    let response =await axios.get(dataURL);
    console.log(response.data);
   setGithubProfile(response.data);

   let dataURL2 = `https://api.github.com/users/${githubUser}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
   let response2 = await axios.get(dataURL2);
   console.log(response2.data)
   setGithubRepos(response2.data);

  }

  return (
    <>
       <div className="container mt-6">
                <div className="row">
                    <div className="col">
                        <p className="display-3 heading">Github Profile Search</p>
                        <p className="lead font-weight-bold">Search a Github Profile to see his/her activities</p>
                    </div>
                </div>
                <div className="row">
                  <div className="col">
                        <form className="form-inline" onSubmit={submitSearch}>
                            <div className="form-group">
                                <input
                                    style={{fontWeight:'bold' ,width:'600px'}}
                                    value={githubUser}
                                    
                                    onChange={e => setGithubUser(e.target.value)}
                                    size="25" type="text" className="form-control" placeholder="Github Username"/>
                            </div>
                            <input style={{background:'purple', borderRadius:'10%'}} type="submit" className="btn btn-secondary btn-sm" value="Search"/>
                        </form>
                    </div>
                </div>
            </div>
      {/* <div className="conatiner mt-6">
        <div className="row">
          <div className="col">
            <p className="display-3">Github Profile Search</p>
            <p className="lead font-weight-bold">
              Search a Github Profile to see his/her activities
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form className="form-inline" onSubmit={submitSearch}>
              <input
                style={{ fontWeight: "bold" }}
                value={githubUser}
                onChange={(e) => setGithubUser(e.target.value)}
                size="30"
                type="text"
                className="form-control"
                placeholder="Github UserName"
              />

              <input
                style={{ fontWeight: "bold" }}
                type="submit"
                value="Search"
                className="btn btn-secondary btn-sm"
              />
            </form>
          </div>
        </div>
      </div> */}
      <div>{ Object.keys(githubProfile).length>0 &&
        <GithubProfile data={githubProfile} />
      }
      </div>
      <div>{ githubRepos.length >0 &&
        <GithubRepos data={githubRepos} />
      }
      </div>
    </>
  );
}

export default GithubSearchApp