import React from 'react'

const Signup = () => {
    return (
        <div>
            <div>
                <div className="pace  pace-inactive pace-inactive"><div className="pace-progress" data-progress-text="100%" data-progress={99} style={{ transform: 'translate3d(100%, 0px, 0px)' }}>
                    <div className="pace-progress-inner" />
                </div>
                    <div className="pace-activity" /></div>
                <app-root _nghost-ymn-c58 ng-version="13.3.1"><router-outlet _ngcontent-ymn-c58 /><app-content-layout _nghost-ymn-c57><router-outlet _ngcontent-ymn-c57 /><app-sign-up _nghost-ymn-c60><div _ngcontent-ymn-c60 className="bg-login"><div _ngcontent-ymn-c60 className="wrapper"><div _ngcontent-ymn-c60 className="d-flex align-items-center justify-content-center my-5 my-lg-0"><div _ngcontent-ymn-c60 className="container"><div _ngcontent-ymn-c60 className="row row-cols-1 row-cols-lg-2 row-cols-xl-2"><div _ngcontent-ymn-c60 className="col mx-auto"><div _ngcontent-ymn-c60 className="my-4 text-center"><img _ngcontent-ymn-c60 src="public/logo2.jpg.png" width={100} alt /></div><div _ngcontent-ymn-c60 className="card"><div _ngcontent-ymn-c60 className="card-body"><div _ngcontent-ymn-c60 className="border p-4 rounded"><div _ngcontent-ymn-c60 className="text-center"><h4 style={{ fontFamily: "monospace" }} _ngcontent-ymn-c60>Sign Up</h4> </div>  <div _ngcontent-ymn-c60 className="form-body"><form _ngcontent-ymn-c60 className="row g-3"><div _ngcontent-ymn-c60 className="col-sm-6"><label _ngcontent-ymn-c60 htmlFor="inputFirstName" className="form-label">First Name</label><input _ngcontent-ymn-c60 type="text" id="inputFirstName" placeholder="Jhon" className="form-control" /></div><div _ngcontent-ymn-c60 className="col-sm-6"><label _ngcontent-ymn-c60 htmlFor="inputLastName" className="form-label">Last Name</label><input _ngcontent-ymn-c60 type="text" id="inputLastName" placeholder="Deo" className="form-control" /></div><div _ngcontent-ymn-c60 className="col-12"><label style={{ marginTop: '10px' }} _ngcontent-ymn-c60 htmlFor="inputEmailAddress" className="form-label">Email Address</label><input _ngcontent-ymn-c60 type="email" id="inputEmailAddress" placeholder="example@user.com" className="form-control" /></div>
                    <div _ngcontent-ymn-c60 className="col-12"><label style={{ marginTop: '10px' }} _ngcontent-ymn-c60 htmlFor="inputEmailAddress" className="form-label">Password</label><input style={{ borderRadius: '5px' }} _ngcontent-ymn-c60 type="password" id="inputEmailAddress" placeholder="**********" className="form-control" /></div>
                    <div _ngcontent-ymn-c60 className="col-12"><div _ngcontent-ymn-c60 className="d-grid"><button _ngcontent-ymn-c60 type="submit" className="btn btn-primary"><i _ngcontent-ymn-c60 className="bx bx-user" />Sign up</button></div></div></form></div></div></div></div></div></div></div></div></div></div></app-sign-up>{/**/}</app-content-layout>{/**/}</app-root>
                <div className="page-loading">
                    <div className="spinner-border text-primary loading-icon" role="status">
                    </div>
                </div>
                <svg id="SvgjsSvg1001" width={2} height={0} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" style={{ overflow: 'hidden', top: '-100%', left: '-100%', position: 'absolute', opacity: 0 }}><defs id="SvgjsDefs1002" /><polyline id="SvgjsPolyline1003" points="0,0" /><path id="SvgjsPath1004" d="M0 0 " /></svg>
            </div>

        </div>
    )
}

export default Signup
