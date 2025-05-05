import React, { useState } from 'react';
import Pesquisa from 'Components/menuSearch';
import Comentario from 'Components/menuComments';
import OtherPius from 'Components/menuOtherPius';
import MyPiu from 'Components/menuMyPiu';
import * as S from './styles';

const MenuPrincipal = () => {
    const [comentario, setComentario] = useState<string>('');
    const [mostrar, setMostrar] = useState(false);

    const handleComentarioClick = () => {
        if (comentario.trim() !== '') {
            setMostrar(true);
        }
    };

    return (
        <S.Container>
            <Pesquisa />
            <Comentario
                onSend={handleComentarioClick}
                onChangeText={setComentario}
                value={comentario}
            />
            <S.Line />
            {mostrar && (
                <MyPiu
                    textMessage={comentario}
                    onDelete={() => setMostrar(false)}
                />
            )}
            <OtherPius
                userImage="/assets/images/menuImages/moizesRock.jpg"
                userName="Moizas"
                userId="@yasmin_asbola"
                textMessage="só os do rock são do tec"
            />
            <OtherPius
                userImage="/assets/images/menuImages/damasio_Easy-Resize.com.jpg"
                userName="Damisio"
                userId="@desempregado"
                textMessage="eu entendendo a porra toda e com a rola d..."
            />
            <OtherPius
                userImage="/assets/images/menuImages/unicoRock.jpg"
                userName="papacu"
                userId="@chifrudo"
                textMessage="quem da cu da sorte"
            />
        </S.Container>
    );
};

export default MenuPrincipal;
