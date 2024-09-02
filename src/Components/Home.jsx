import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled, { createGlobalStyle } from "styled-components";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Show from "./Show";
import HeaderHome from "./HeaderHome";
const GlobalStyle = createGlobalStyle`
    body{
        background-color: black;
    }
`;

const CarouselContainer = styled.div`
    width: 100%;
    margin: auto;
`;

const CustomCarousel = styled(Carousel)`
    .react-multi-carousel-item {
        padding: 0px;
    }

    .react-multi-carousel-item img {
        width: 150px;
        height: auto;
        object-fit: cover;
    }

    .react-multi-carousel-dot {
        background: rgba(0, 0, 0, 0.5);
    }

    .react-multi-carousel-dot--active {
        background: white;
    }

    .react-multi-carousel-arrow {
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        color: white;
    }
`;

const H2 = styled.h2`
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 20px;
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 600px;
    width: 100%;
    display: flex;
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
`;

const MovieImage = styled.img`
    width: 200px;
    height: auto;
    margin-right: 20px;
`;

const MovieDetails = styled.div`
    max-width: 600px;
`;

const Title = styled.h3`
    margin: 0 0 10px 0;
`;

const Info = styled.p`
    margin: 5px 0;
`;

function Home() {
    const [lancamento, setLancamento] = useState([]);
    const [comedia, setComedia] = useState([]);
    const [acao, setacao] = useState([]);
    const [romance, setromance] = useState([]);
    const [terror, seterror] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const searchLancamento = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=cf4e5bac29baf13bc85b975d1b5cc7bb&primary_release_year=2024&language=pt-BR&page=1`);
            setLancamento(response.data.results);
        } catch (error) {
            console.error("Erro: ", error);
        }
    };

    const searchAcao = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=cf4e5bac29baf13bc85b975d1b5cc7bb&with_genres=28&language=pt-BR&page=1`);
            setacao(response.data.results);
        } catch (error) {
            console.error("Erro: ", error);
        }
    };

    const searchComedia = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=cf4e5bac29baf13bc85b975d1b5cc7bb&with_genres=35&language=pt-BR&page=1`);
            setComedia(response.data.results);
        } catch (error) {
            console.error("Erro: ", error);
        }
    };

    const searchRomance = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=cf4e5bac29baf13bc85b975d1b5cc7bb&with_genres=10749&language=pt-BR&page=1`);
            setromance(response.data.results);
        } catch (error) {
            console.error("Erro: ", error);
        }
    };

    const searchTerror = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=cf4e5bac29baf13bc85b975d1b5cc7bb&with_genres=27&language=pt-BR&page=1`);
            seterror(response.data.results);
        } catch (error) {
            console.error("Erro: ", error);
        }
    };

    useEffect(() => {
        searchLancamento();
        searchAcao();
        searchComedia();
        searchRomance();
        searchTerror();
    }, []);

    const getMovieDetails = async (id) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=cf4e5bac29baf13bc85b975d1b5cc7bb&language=pt-BR`);
            return response.data;
        } catch (error) {
            console.error("Erro ao obter detalhes do filme: ", error);
        }
    };

    const handleItemClick = async (movie) => {
        const details = await getMovieDetails(movie.id);
        setSelectedMovie(details);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedMovie(null);
    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 30
        },
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 9
        },
        ldesktop: {
            breakpoint: { max: 3000, min: 2000 },
            items: 12
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <>
            <GlobalStyle />
            <Show/>
            <H2>Lançamentos</H2>
            {lancamento.length > 0 && (
                <CarouselContainer>
                    <CustomCarousel
                        responsive={responsive}
                        infinite
                        autoPlay
                        autoPlaySpeed={3000}
                        keyBoardControl
                        customTransition="all 1s"
                        transitionDuration={1000}
                    >
                        {lancamento.map((movie) => (
                            <div key={movie.id} onClick={() => handleItemClick(movie)}>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                    alt={`${movie.title} poster`} 
                                />
                            </div>
                        ))}
                    </CustomCarousel>
                </CarouselContainer>
            )}

            <H2>Comédia</H2>
            {comedia.length > 0 && (
                <CarouselContainer>
                    <CustomCarousel
                        responsive={responsive}
                        infinite
                        autoPlay
                        autoPlaySpeed={3000}
                        keyBoardControl
                        customTransition="all 1s"
                        transitionDuration={1000}
                    >
                        {comedia.map((movie) => (
                            <div key={movie.id} onClick={() => handleItemClick(movie)}>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                    alt={`${movie.title} poster`} 
                                />
                            </div>
                        ))}
                    </CustomCarousel>
                </CarouselContainer>
            )}

            <H2>Romance</H2>
            {romance.length > 0 && (
                <CarouselContainer>
                    <CustomCarousel
                        responsive={responsive}
                        infinite
                        autoPlay
                        autoPlaySpeed={3000}
                        keyBoardControl
                        customTransition="all 1s"
                        transitionDuration={1000}
                    >
                        {romance.map((movie) => (
                            <div key={movie.id} onClick={() => handleItemClick(movie)}>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                    alt={`${movie.title} poster`} 
                                />
                            </div>
                        ))}
                    </CustomCarousel>
                </CarouselContainer>
            )}

            <H2>Terror</H2>
            {terror.length > 0 && (
                <CarouselContainer>
                    <CustomCarousel
                        responsive={responsive}
                        infinite
                        autoPlay
                        autoPlaySpeed={3000}
                        keyBoardControl
                        customTransition="all 1s"
                        transitionDuration={1000}
                    >
                        {terror.map((movie) => (
                            <div key={movie.id} onClick={() => handleItemClick(movie)}>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                    alt={`${movie.title} poster`} 
                                />
                            </div>
                        ))}
                    </CustomCarousel>
                </CarouselContainer>
            )}

            <H2>Ação</H2>
            {acao.length > 0 && (
                <CarouselContainer>
                    <CustomCarousel
                        responsive={responsive}
                        infinite
                        autoPlay
                        autoPlaySpeed={3000}
                        keyBoardControl
                        customTransition="all 1s"
                        transitionDuration={1000}
                    >
                        {acao.map((movie) => (
                            <div key={movie.id} onClick={() => handleItemClick(movie)}>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                    alt={`${movie.title} poster`} 
                                />
                            </div>
                        ))}
                    </CustomCarousel>
                </CarouselContainer>
            )}

            {modalOpen && selectedMovie && (
                <ModalOverlay onClick={handleCloseModal}>
                    <ModalContent onClick={e => e.stopPropagation()}>
                        <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
                        <MovieImage 
                            src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} 
                            alt={`${selectedMovie.title} poster`} 
                        />
                        <MovieDetails>
                            <Title>{selectedMovie.title}</Title>
                            <Info><strong>Resumo:</strong> {selectedMovie.overview}</Info>
                            <Info><strong>Data de Lançamento:</strong> {selectedMovie.release_date}</Info>
                        </MovieDetails>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    );
}

export default Home;
