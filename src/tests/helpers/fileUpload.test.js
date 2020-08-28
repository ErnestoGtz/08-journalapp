import { fileUpload } from '../../helpers/fileUpload';
import '@testing-library/jest-dom';
import cloudinary from 'cloudinary';


cloudinary.config({ 
    cloud_name: 'ernestogtz', 
    api_key: '581869817548977', 
    api_secret: 'stYrZMuIZug1-GVEGN3uF_xip78' 
});

describe('Pruebas en fileUpload', () => {
    test('debe de cargar un archivo y retorna el URL',async (done) => {
        const resp = await fetch('https://res.cloudinary.com/teepublic/image/private/s--DwLEQFx4--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_262c3a,e_outline:48/co_262c3a,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1572303219/production/designs/6502315_0.jpg');
        const blob = await resp.blob();
        const file = new File([blob],'foto.png');
        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        //Borrar imagen por ID
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg','');
        

        cloudinary.v2.api.delete_resources(imageId, {}, ()=>{
            done();
        });
    });

    test('debe de retornar un error', async() => {
        const file = new File([],'foto.png');
        const url = await fileUpload(file);
        expect(url).toBe(null);
    })
    
    
});
