export default function NewListPageHeader() {
    return (
        <div className="row" style={{
            backgroundColor: '#1f1f1f'
        }}>
            <div className="col-lg-1"></div>
            <div style={{
                lineHeight: '.7',
                height: '130px',
                color: 'white',
                background: '#1f1f1f',
                padding: '32px',
                paddingBottom: '24px'
            }}
                className="col-lg-10">
                <p style={{
                    fontFamily: 'sans-serif', 
                    fontWeight: '400', 
                    fontSize: '3rem', 
                    marginBottom: '24px'}}>Create a new list</p>
                <p>List your movie, TV & celebrity picks.</p>
            </div>
            <div className="col-lg-1"></div>
        </div>
    )
}