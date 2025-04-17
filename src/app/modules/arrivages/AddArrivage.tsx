import React, { useRef, useState } from "react";
import {
  Card,
  Form,
  Button,
  Table,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const AddArrivage: React.FC = () => {
  const [searchCommandeQuery, setSearchCommandeQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const [commandes, setCommandes] = useState<
    {
      id: string;
      numeroFactureProforma: string;
      fournisseur: string;
      devise: string;
      qualite: string;
      tonnage: number;
      tauxChange: number;
      delaiPaiement: string;
      prixUnitaire: number;
      incoterm: string;
    }[]
  >([]);
  const handleSearchCommande = () => {
    setIsSearching(true);
    setTimeout(() => {
      setCommandes([
        {
          id: "CMD-2025-001",
          numeroFactureProforma: "FP-2025-1001",
          fournisseur: "ArcelorMittal",
          devise: "EUR",
          qualite: "A36",
          tonnage: 5000,
          tauxChange: 10.5,
          delaiPaiement: "30 jours",
          prixUnitaire: 450,
          incoterm: "CIF",
        },
        {
          id: "CMD-2025-002",
          numeroFactureProforma: "FP-2025-1002",
          fournisseur: "Tata Steel",
          devise: "USD",
          qualite: "S235",
          tonnage: 3000,
          tauxChange: 10.3,
          delaiPaiement: "60 jours",
          prixUnitaire: 420,
          incoterm: "FOB",
        },
      ]);

      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="container-fluid mt-4">
      <h3 className="card-header-title mb-1">Création d'arrivage</h3>
      <Card>
        <div className="card border-0 shadow-sm rounded-3 p-8">
          <Card.Body>
            {/* ✅ GESTION DES COMMANDES */}
            <div className="mb-5">
              <h1 className="card-header-title mb-2">
                Importation des commandes
              </h1>

              <Form>
                <Row className="align-items-end">
                  <Col md={6}>
                    <Form.Group controlId="searchCommande">
                      <Form.Label>N° de commande</Form.Label>
                      <Form.Control
                        type="text"
                        value={searchCommandeQuery}
                        onChange={(e) => setSearchCommandeQuery(e.target.value)}
                        placeholder="Entrez un numéro de commande"
                      />
                    </Form.Group>
                  </Col>
                  <Col md="auto">
                    <Button
                      variant="primary"
                      onClick={handleSearchCommande}
                      disabled={isSearching}
                      className="d-flex align-items-center"
                    >
                      {isSearching ? (
                        <>
                          Recherche...{" "}
                          <Spinner
                            animation="border"
                            size="sm"
                            className="ms-2"
                          />
                        </>
                      ) : (
                        <>
                          Rechercher <BsSearch className="ms-2" />
                        </>
                      )}
                    </Button>
                  </Col>
                </Row>
              </Form>

              {commandes.length > 0 && (
                <Table bordered responsive className="mt-4">
                  <thead className="table-light">
                    <tr>
                      <th>N° Facture Proforma</th>
                      <th>Fournisseur</th>
                      <th>Devise</th>
                      <th>Qualité</th>
                      <th>Tonnage</th>
                      <th>Taux de change</th>
                      <th>Délai de paiement</th>
                      <th>Prix unitaire Final</th>
                      <th>Incoterm</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commandes.map((commande) => (
                      <tr key={commande.id}>
                        <td>{commande.numeroFactureProforma}</td>
                        <td>{commande.fournisseur}</td>
                        <td>{commande.devise}</td>
                        <td>{commande.qualite}</td>
                        <td>{commande.tonnage} tonnes</td>
                        <td>{commande.tauxChange}</td>
                        <td>{commande.delaiPaiement}</td>
                        <td>{commande.prixUnitaire} €/tonne</td>
                        <td>{commande.incoterm}</td>
                        <td className="text-end">
                          <DropdownButton
                            as={ButtonGroup}
                            variant="light"
                            title={<BsThreeDotsVertical />}
                            align="end"
                            size="sm"
                          >
                            <Dropdown.Item>Modifier</Dropdown.Item>
                            <Dropdown.Item>Voir détails</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="text-danger">
                              Supprimer
                            </Dropdown.Item>
                          </DropdownButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </div>
          </Card.Body>
        </div>
      </Card>

      {/* ✅ FORMULAIRE D’ARRIVAGE */}
      <Card className="mt-3">
        <div className="card border-0 shadow-sm rounded-3 p-8 ">
          <h5 className="card-header-title mb-1">
            Formulaire de création d'arrivage
          </h5>
          <p className="card-header-subtitle mb-4" style={{ fontSize: "1rem" }}>
            Remplissez les informations pour créer un nouvel arrivage
          </p>
          <Card.Body>
            <Form>
              {/* Ligne : Tolérance Tonnage + Date Booking */}
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Date Booking</Form.Label>
                    <Form.Control type="date" name="dateBooking" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Date Fix Buyers</Form.Label>
                    <Form.Control type="date" name="dateFixBuyers" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Date Réception Facture Proforma</Form.Label>
                    <Form.Control type="date" name="dateReceptionFP" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Tolérance Tonnage</Form.Label>
                    <Form.Control
                      type="number"
                      name="toleranceTonnage"
                      placeholder="Ex: 5"
                    />
                  </Form.Group>
                </Col>
              </Row>
              {/* Ligne : Date Fix Buyers + Coût Financement */}
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Coût de Financement</Form.Label>
                    <Form.Control
                      type="number"
                      name="coutFinancement"
                      placeholder="Ex: 25000.00"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Fret (Prix en Devise)</Form.Label>
                    <Form.Control
                      type="number"
                      name="fretPrixDevise"
                      placeholder="Ex: 350000.00"
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Ligne : Devise */}
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="deviseSelect">
                    <Form.Label>Devise</Form.Label>
                    <Form.Select name="devise">
                      <option value="">-- Sélectionner une devise --</option>
                      <option value="MAD">MAD - Dirham marocain</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="USD">USD - Dollar américain</option>
                      <option value="GBP">GBP - Livre sterling</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <div className="text-end mb-4  mt-10">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate(-1)}
                >
                  Annuler
                </button>
                <Button type="submit">Créer l'arrivage</Button>
              </div>
            </Form>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default AddArrivage;
